
import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Patch,
    Delete,
    HttpCode,
    HttpStatus
} from '@nestjs/common';

import { FotosService } from './fotos.service.js';

@Controller('fotos') // ruta base: /fotos
export class FotosController {
    constructor(
        private readonly fotosService: FotosService,
    ) {}

    @Get()
    findAll() {
        return this.fotosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.fotosService.findOne(id);
    }

    @Post()
    create(@Body() datos: Parameters<FotosService['create']>[0]) {
        return this.fotosService.create(datos);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() datos: Parameters<FotosService['update']>[1]
    ) {
        return this.fotosService.update(id, datos);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.fotosService.remove(id);
    }
}
