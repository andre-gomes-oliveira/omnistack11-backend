const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response){
        //Descontruindo o body da requisição em seus parâmetros
        const {name, email, whatsapp, city, uf} = request.body;

        //Gerando um id aleatório para a ONG
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ngos').insert({
            id,
            name,
            email,
            whatsapp, 
            city, 
            uf
        })

        return response.json({
            id
        });
    },

    async index(request, response) {
        const ngos = await connection('ngos').select('*');
    
        return response.json (
            ngos
        );
    }
}