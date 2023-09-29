import { Injectable } from '@angular/core';
import { LicenceCubesService } from './licence-cubes.service';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class LandService {
  private land: THREE.Group;

  constructor(private license: LicenceCubesService) {}

  buildLand() {
    this.land = new THREE.Group();
    const cubes = this.license.getBlocks();
    for (var i = 0; i < cubes.length; i++) {
      const landCube = this.license.createBlock(cubes[i]);
      this.land.add(landCube);
    }
  }

  getLand() {
    return this.land;
  }
}
