import { Test, TestingModule } from '@nestjs/testing';
import { CandidacyController } from './candidacy.controller';

describe('CandidacyController', () => {
  let controller: CandidacyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidacyController],
    }).compile();

    controller = module.get<CandidacyController>(CandidacyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
