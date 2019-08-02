pnpm run lint;
pnpm run build;
vuese gen;
cd ..;
robocopy /S /E .\website-build .\ /move;
#$loc = Get-Location;
git add .