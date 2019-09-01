import {
  Injectable
} from '@angular/core';
import {
  GET_META_SETTINGS
} from "@env/api.paths";
import {
  RequestService
} from '@services/http/request.service';


import { TemporaryStorageService } from '@services/temporary-storage/temporary-storage.service';

@Injectable()
export class LoadMetaService {

  constructor(
    private request: RequestService,
    private temp: TemporaryStorageService,
  ) { }

  getMetaTags() {

    return new Promise((resolve, reject) => {
      this.request.GET(GET_META_SETTINGS, {}).subscribe(response => {
        if (response['status'] && response.data) {
          this.temp.set('meta', response.data);
          resolve(response);
        }
      }, err => {

      });

    });

  }
}
