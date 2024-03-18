import { Test, TestingModule } from '@nestjs/testing';
import { StacksController } from './stacks.controller';
import { StacksService } from './stacks.service';

describe('StacksController', () => {
  let controller: StacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StacksController],
      providers: [StacksService],
    }).compile();

    controller = module.get<StacksController>(StacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
