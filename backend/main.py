from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/photos")
def get_photos():
    return [
        {
            "id": 1,
            "title": "初めてのミルク",
        },
        {
            "id": 2,
            "title": "家族写真",
        },
    ]
