from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from server.api.routes import router as api_router
from server.core.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configuration des CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:8000", "http://20.105.232.27:8000", "https://cycloeval-fhd5gsg3g7bxdgaj.westeurope-01.azurewebsites.net"],  # Ajoutez les origines autorisées ici
    allow_credentials=True,
    allow_methods=["*"],  # Autorisez toutes les méthodes HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Autorisez tous les en-têtes
)

app.include_router(api_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="20.105.232.27", port=8000)
