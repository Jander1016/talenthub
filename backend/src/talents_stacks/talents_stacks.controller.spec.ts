import { Test, TestingModule } from '@nestjs/testing';
import { TalentsStacksController } from './talents_stacks.controller';
import { TalentsStacksService } from './talents_stacks.service';

describe('TalentsStacksController', () => {
  let controller: TalentsStacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TalentsStacksController],
      providers: [TalentsStacksService],
    }).compile();

    controller = module.get<TalentsStacksController>(TalentsStacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
