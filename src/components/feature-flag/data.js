const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToeBoard : true,
    showRandomColorGenerator : true,
    showAccordian : false,
    showTreeView : true
}

function featureFlagDataServiceCall(){
    return new Promise((resolve,reject) => {
        if(dummyApiResponse){
            setTimeout(() => {
                resolve(dummyApiResponse)
            }, 500);
        }
        else{
            reject(new Error("Error in data service call"))
        }
    })
}

export default featureFlagDataServiceCall;