okcPath="./keystore"

if [ -e $okcPath ]; then
echo "already init"
else
echo "init"
./okc --datadir ./ rj config.json
fi

echo "run okc"
./okc --rpcport 3000 --port 3003  --rpccorsdomain "http://localhost:3000"  --datadir ./ cs 2>>./okc.log
