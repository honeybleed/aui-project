import { Injectable, Optional } from '@angular/core';

export class TestConfig {
  value: string;
}

@Injectable()
export class TestCoreService {
  configString: string;
  constructor(@Optional() config: TestConfig) {
    this.configString = config.value;
  }
}
