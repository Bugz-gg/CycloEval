from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from server.api.routes import router as api_router
from server.core.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configuration des CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",  # Development environment
        "http://localhost:80",  # Specific port for local testing
        "http://localhost:3000",  # React default dev server port
        "https://cycloeval-fhd5gsg3g7bxdgaj.westeurope-01.azurewebsites.net",  # Production
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Autorisez toutes les méthodes HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Autorisez tous les en-têtes
)

app.include_router(api_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="cycloeval-fhd5gsg3g7bxdgaj.westeurope-01.azurewebsites.net", port=80)
