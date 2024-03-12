import { Test, TestingModule } from '@nestjs/testing';
import { StacksService } from './stacks.service';

describe('StacksService', () => {
  let service: StacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StacksService],
    }).compile();

    service = module.get<StacksService>(StacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
