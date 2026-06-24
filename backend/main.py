from fastapi import FastAPI

app = FastAPI()


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
