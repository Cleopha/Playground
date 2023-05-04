import { Injectable, OnModuleInit } from '@nestjs/common';
import { Request, Response } from 'express';
import { collectDefaultMetrics, Registry } from 'prom-client';

@Injectable()
export class MetricsService implements OnModuleInit {
  private readonly registry = new Registry();

  onModuleInit() {
    collectDefaultMetrics({ register: this.registry });
  }

  async getMetrics(req: Request, res: Response) {
    res.set('Content-Type', this.registry.contentType);
    res.end(await this.registry.metrics());
  }
}
