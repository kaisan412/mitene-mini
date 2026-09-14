from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from database import Base, SessionLocal, engine
from models import Photo
from schemas import PhotoCreate


app = FastAPI()

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()

@app.get("/db-test")
def db_test():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        return {"result": result.scalar()}

@app.post("/photos")
def create_photo(photo_data: PhotoCreate, db=Depends(get_db)):
    photo = Photo(
        title=photo_data.title,
        description=photo_data.description,
        image_url=photo_data.image_url,
    )

    db.add(photo)
    db.commit()
    db.refresh(photo)

    return photo

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/photos")
def get_photos():
    return [
        {
            "id": 1,
            "title": "初めてのミルク",
            "description": "赤ちゃんが初めてミルクを飲む瞬間の写真です。とても可愛らしい表情をしています。",
            "image_url": "https://picsum.photos/600/400?random=1",
            "created_at": "2026-08-19T10:30:00",
        },
        {
            "id": 2,
            "title": "家族写真",
            "description": "家族で撮影した素敵な写真です。笑顔が素敵です。",
            "image_url": "https://picsum.photos/600/400?random=2",
            "created_at": "2026-08-18T15:00:00",
        },
        {
            "id": 3,
            "title": "旅行の思い出",
            "description": "旅行で撮影した素敵な写真です。景色が美しかったです。",
            "image_url": "https://picsum.photos/600/400?random=3",
            "created_at": "2026-08-17T13:20:00",
        },
    ]
