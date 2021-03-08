!/usr/bin
PACKAGE_HASH=$(md5sum package.json | awk '{print $1}');
curl -k "sftp://172.16.24.26/npm_cache/${PACKAGE_HASH}.tar" --user "sftp_user:WctIaas$2020" -o ./node_modules.tar

if [ -f ./node_modules.tar ]; 
then
    echo "Use Cache";
    tar xf node_modules.tar;
else
    npm install;
    tar cf - ./node_modules > ${PACKAGE_HASH}.tar
    curl -k "sftp://172.16.24.26/npm_cache/" --user "sftp_user:WctIaas$2020" -T ./${PACKAGE_HASH}.tar
fi