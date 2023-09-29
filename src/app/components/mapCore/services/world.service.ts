import { Injectable } from '@angular/core';
import { LicenceCubesService } from './licence-cubes.service';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class WorldService {
  constructor(private licence: LicenceCubesService) {}

  buildWorld() {
    const cubes = this.licence.getBlocks();

    const land = new THREE.Group();
  }
}
