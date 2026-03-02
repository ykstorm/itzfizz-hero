@echo off
REM ============================================================
REM  Run this file inside your project folder to set up GitHub
REM  Replace YOUR_USERNAME with your actual GitHub username
REM ============================================================

echo Setting up git...

git init
git add .
git commit -m "initial setup - next.js project with tailwind"

echo.
echo Done. Now do the following:
echo.
echo 1. Go to github.com and create a NEW repository called: itzfizz-hero
echo    (make it public, don't add any files - keep it empty)
echo.
echo 2. Then run these two commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/itzfizz-hero.git
echo    git push -u origin main
echo.
echo 3. If "main" doesn't work, try:
echo    git branch -M main
echo    git push -u origin main
echo.
pause
