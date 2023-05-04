import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  async getMetrics(@Req() req: Request, @Res() res: Response) {
    return this.metricsService.getMetrics(req, res);
  }
}
