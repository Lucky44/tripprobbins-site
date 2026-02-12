@echo off
echo Cleaning up environment...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist build_log.txt del build_log.txt
if exist build_log_npx.txt del build_log_npx.txt
if exist terminal_test.txt del terminal_test.txt
if exist terminal_test_bat.txt del terminal_test_bat.txt
if exist test.bat del test.bat
echo Cleanup complete.
