#!/bin/bash

DIRECTORY=$1

if [ -d "$DIRECTORY" ] 
 then
   FILES=`ls -l $DIRECTORY | wc -l`
   echo "o $DIRECTORY tem $FILES arquivos"
else
  echo "o argumento $DIRECTORY não é um diretório"
fi



