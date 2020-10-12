export default function() {
    let operations = {
      GET
    };
   
    // NOTE: We could also use a YAML string here.
    GET.apiDoc = {
      summary: 'Obtiene todos los usuarios',
      operationId: 'getUsers',
      parameters: [],
      responses: {
        200: {
          description: 'Una lista de usuarios del parqueadero',
          schema: {
            type: 'array',
            items: {
              $ref: '#//'
            }
          }
        },
        default: {
          description: 'An error occurred',
          schema: {
            additionalProperties: true
          }
        }
      }
    };
   
    return operations;
  }