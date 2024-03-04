import { Schema, model } from "mongoose"

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type:String,
        minLenght:[8,'Contraseña muy pequeña'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minLenght: 8,
        required: true
    }
})

export default model('usuario', UserSchema)