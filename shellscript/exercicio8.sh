
files=$@

for file in $files
  do
if [ -f "$file" ]
 then
echo "$file é um arquivo"
elif [ -d "$file" ]
 then
 echo "$file é um diretório"
 else
  echo "$file é outro tipo de arquivo"
 fi
 
 ls -l $file 
 done