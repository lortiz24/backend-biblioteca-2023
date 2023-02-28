import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger';

export function ApiResponseDecorator<T>(entidad: T) {
    return applyDecorators(
        ApiOkResponse({ type: [entidad] }),
        ApiResponse({ status: 400, description: 'BadRequest' }),
        ApiResponse({ status: 401, description: 'Unauthorized' }),
        ApiResponse({ status: 403, description: 'Forbidden. Token related.' }),
        ApiResponse({ status: 404, description: 'Not Found' }),
    );
}