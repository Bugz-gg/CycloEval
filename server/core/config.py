from pydantic_settings import BaseSettings
from pydantic import ConfigDict

class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///./test.db"
    SECRET_KEY: str = "ashdiuy38726ty9wugfe9823y11219"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    GOOGLE_CLIENT_ID: str ="871049579850-goq7ehncdun5u7g6antk7p29g763d3hr.apps.googleusercontent.com"
    



    model_config = ConfigDict(from_attributes=True)

settings = Settings()
