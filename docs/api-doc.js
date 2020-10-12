const apiDoc = {
    swagger: '2.0',
    basePath: '/v1',
    info: {
      title: 'Parqueadero API docs',
      version: '1.0.0'
    },
    definitions: {
      User: {
        type: 'object',
        properties: {
          nombre: {
            description: 'El nombre de la persona',
            type: 'string'
          },
          placa: {
              description: 'La placa del vehículo de la persona',
              type: 'string'
          },
          tipo: {
              description: 'El tipo de vehículo de la persona',
              type: 'string'
          }
        },
        required: [
            'nombre',
            'placa',
            'tipo'
        ]
      }
    },
    paths: {}
  };
   
  export default apiDoc;