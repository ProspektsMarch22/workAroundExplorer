export const formatNumber = numbStr => {
    numbStr = Math.floor(numbStr).toString();
    for(let i = numbStr.length - 3; i > 0; i -= 3){
        numbStr = numbStr.slice(0, i) + ',' + numbStr.slice(i);
    }

    return numbStr;
}