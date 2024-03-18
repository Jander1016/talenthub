import { Test, TestingModule } from '@nestjs/testing';
import { TalentsStacksService } from './talents_stacks.service';

describe('TalentsStacksService', () => {
  let service: TalentsStacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TalentsStacksService],
    }).compile();

    service = module.get<TalentsStacksService>(TalentsStacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
