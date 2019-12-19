
const env = {
    MODE: 'DEVELOPMENT',
    BUILDFOR: 'EXTERNA'
};


const conf = (()=>{
    var credentials = {
        user: 'vialactea\\',
        pass: ''
    };

    return () => {return credentials;};
})();


export {conf};
export default env;
