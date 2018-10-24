
const env = {
    MODE: 'DEVELOPMENT',
    BUILDFOR: 'EXTERNA'
};


const conf = (()=>{
    var credentials = {
        user: 'vialactea\\usrgis',
        pass: 'N3L4y5HZ'
    };

    return () => {return credentials;};
})();


export {conf};
export default env;