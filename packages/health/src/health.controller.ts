import { GrpcMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

export enum ServingStatus {
  UNKNOWN = 0,
  SERVING = 1,
  NOT_SERVING = 2,
}

export interface HealthCheckRequest {
  service: string;
}

export interface HealthCheckResposne {
  status: ServingStatus;
}

@Controller()
export class HealthController {
  @GrpcMethod('Health', 'Check')
  check(data: HealthCheckRequest, metadata: any): HealthCheckResposne {
    return { status: ServingStatus.SERVING };
  }
}