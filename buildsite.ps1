cd re-krass-website; 
npm run lint;
npm run build;
vuese gen;
cd ..;
robocopy /S /E .\website-build .\ /move;
#$loc = Get-Location;
git add .