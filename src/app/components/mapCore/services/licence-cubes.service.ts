import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class LicenceCubesService {
  public texture: string = '/assets/textures/sediment.jpg';
  private loader = new THREE.TextureLoader();
  private cubes = [
    { id: 1, height: 20 },
    { id: 2, height: 20 },
    { id: 3, height: 20 },
    { id: 4, height: 20 },
    { id: 5, height: 20 },
    { id: 6, height: 20 },
    { id: 7, height: 20 },
    { id: 9, height: 20 },
    { id: 10, height: 20 },
    { id: 11, height: 20 },
    { id: 12, height: 20 },
    { id: 13, height: 20 },
    { id: 14, height: 20 },
    { id: 15, height: 20 },
    { id: 16, height: 20 },
    { id: 17, height: 20 },
    { id: 18, height: 20 },
    { id: 19, height: 20 },
    { id: 20, height: 20 },
  ];
  constructor() {}

  getBlocks() {
    return this.cubes;
  }

  createBlock(blockInfo: any) {
    const x = 20;
    const z = 20;
    const height = blockInfo.height;
    const geometry = new THREE.BoxBufferGeometry(x, height, z);
    const material = new THREE.MeshBasicMaterial({
      map: this.loader.load(this.texture),
    });

    const block = new THREE.Mesh(geometry, material);
    return block;
  }
}
