import { connect } from 'mongoose';

const connectToMDb=(url)=>{
    connect(url)
            .then(()=>{console.log('connected to mongodb successfully')})
            .catch((e)=>{console.log('unable to connect')   })
}

export default connectToMDb;