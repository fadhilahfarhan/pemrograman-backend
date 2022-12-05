const showDownload = (result) => {
    return new Promise((resolve) => {
        resolve(
            "Download Selesai\n" +
            "hasil Download: " + result);
    })
}

const download = (callShowDownload) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "windows-10.exe"
            resolve(callShowDownload(result))
        }, 3000);
    })
}

const main = async () => {
    console.log(await download(showDownload));
}

main();