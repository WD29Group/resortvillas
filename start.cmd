@echo off
@echo.
@echo   Starting VSCode with WD29 Account
@echo.
@echo.
@echo.
@git config --global user.name wd29group
@git config --global user.email wd29group@gmail.com
@git init
@code . && exit