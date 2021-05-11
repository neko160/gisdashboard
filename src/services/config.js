
const env = {
    MODE: 'DEVELOPMENT',
    BUILDFOR: 'EXTERNA'
};


const conf = (()=>{
    var credentials = {
        user: '',
        pass: ''
    };

    return () => {return credentials;};
})();


export {conf};
export default env;
