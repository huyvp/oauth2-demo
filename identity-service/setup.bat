@REM @echo off
@REM echo ===== set postgres start =====
@REM setx POSTGRES_USERNAME "postgres" /M
@REM setx POSTGRES_PASSWORD "123456" /M
@REM setx POSTGRES_URL "jdbc:postgresql://localhost:5432/postgres" /M
@REM echo ===== set postgres done =====
@REM pause

@echo off
echo ===== set postgres start =====
setx POSTGRES_USERNAME "postgres" /M
setx POSTGRES_PASSWORD "123456" /M
setx POSTGRES_URL "jdbc:postgresql://localhost:5432/postgres" /M
echo ===== set postgres done =====
pause
