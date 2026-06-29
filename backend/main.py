from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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
            "image_url": "https://picsum.photos/600/400?random=1"
        },
        {
            "id": 2,
            "title": "家族写真",
            "description": "家族で撮影した素敵な写真です。笑顔が素敵です。",
            "image_url": "https://picsum.photos/600/400?random=2"
        },
        {
            "id": 3,
            "title": "旅行の思い出",
            "description": "旅行で撮影した素敵な写真です。景色が美しかったです。",
            "image_url": "https://picsum.photos/600/400?random=3"
        },
    ]
