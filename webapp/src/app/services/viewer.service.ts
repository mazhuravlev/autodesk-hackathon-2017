import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {PanelDto} from "../dto/panel.dto";
import "rxjs/add/operator/take";
import "rxjs/add/operator/startWith";

declare const THREE: any;

@Injectable()
export class ViewerService {


  private model: any;
  private viewer: any;

  private viewerSubject: Subject<any> = new Subject();
  private _onViewer: Observable<any>;

  private modelSubject: Subject<any> = new Subject();
  private _onModel: Observable<any>;

  private allIds: number[] = [];
  private levels: Map<string, PanelDto[]> = new Map();

  constructor() {
  }

  private init(): Observable<any> {
    return Observable.create(observer => {
      this.getIds().flatMap(id => this.getLevelAndPanel(id))
        .subscribe(levelAndPanel => {
            if (!this.levels.has(levelAndPanel.level))
              this.levels.set(levelAndPanel.level, [levelAndPanel.panel]);
            else this.levels.get(levelAndPanel.level).push(levelAndPanel.panel);
          }, err => {

          },
          () => {
            observer.complete();
          });
    });

  }

  get onViewer(): Observable<any> {
    return this.viewer ? this.viewerSubject.asObservable().startWith(this.viewer) : this.viewerSubject.asObservable();
  }

  get onModel(): Observable<any> {
    return this.model ? this.modelSubject.asObservable().startWith(this.model) : this.modelSubject.asObservable();
  }

  setViewer(viewer: any) {
    this.viewer = viewer;
    this.viewerSubject.next(viewer);
  }

  setModel(model: any) {
    this.model = model;
    this.init().subscribe(q => {
    }, e => {
    }, () => {
      this.modelSubject.next(model);
    });
  }

  getLevelsMap(): Map<string, PanelDto[]> {
    return this.levels;
  }

  getAllPanels(): Observable<PanelDto[]> {
    return Observable.create(observer => {
      const panels = Array.from(this.levels.values()).reduce((a, b) => a.concat(b));
      observer.next(panels);
      observer.complete();
    })
  }

  private getIds(): Observable<number> {
    return Observable.create(observer => {
      this.model.getObjectTree(tree => {
        var root = tree.getRootId();
        tree.enumNodeChildren(root, id => {
          tree.enumNodeChildren(id, id1 => {
            tree.enumNodeChildren(id1, id2 => {
              tree.enumNodeChildren(id2, id3 => {
                this.allIds.push(id3);
                observer.next(id3);
              });
            });
          });
        });
        observer.complete();
      });
    });
  }

  private getLevelAndPanel(id: number): Observable<{ level: string, panel: PanelDto }> {
    return Observable.create(observer => {
      this.model.getProperties(id, result => {
        let panel = new PanelDto();
        panel.forgeId = id;
        result.properties.filter(x => x.displayName === 'Уровень' || x.displayName === 'Имя типа' || x.displayName === 'Марка')
          .forEach(p => {
            switch (p.displayName) {
              case 'Уровень':
                panel.level = p.displayValue;
                break;
              case 'Имя типа':
                panel.name = p.displayValue;
                break;
              case 'Марка':
                panel.type = p.displayValue;
                break;
            }
          });
        if (panel.level !== '') {
          observer.next({
            level: panel.level,
            panel: panel
          });
        }
        observer.complete();
      });
    });
  }

  getSelection(): Array<number> {
    return this.viewer.getSelection();
  }

  selectElement(ids: number[]){
    this.viewer.select(ids);
  }

  isolateElements(ids: number[]) {
    this.viewer.isolateById(ids);
    this.viewer.fitToView(ids);
  }

  setGhosting(isHideGhost: boolean) {
    this.viewer.setGhosting(isHideGhost);
  }

  hide(ids: number[]) {
    ids.forEach(x => {
      this.viewer.hideById(x);
    });
  }

  show(ids: number[]) {
    ids.forEach(x => {
      this.viewer.show(x);
    });
  }

  showOneElement(id: number) {
    const idsToHide = this.allIds
      .filter(x => x !== id);
    this.isolateElements([id]);
    this.setGhosting(false);
    this.viewer.fitToView([id], this.model);
  }

  setForemanCamera() {
    // this.viewer.setNavigationLock(false);
    const allIds = Array.from(this.levels.values()).reduce((a, b) => a.concat(b)).map(x => x.forgeId);
    this.show(this.allIds);
    this.viewer.fitToView(allIds, this.model);
    const cameraState = "[0.901192843914032,0.4334183931350708,-4.7960204696551045e-9,0,0.00451158732175827,-0.009380770847201347,0.9999458193778992,0,0.4333949089050293,-0.9011439681053162,-0.010409287177026272,0,140.44810485839844,-292.04559326171875,-3.3732967376708984,1]";
    const camera = this.viewer.getCamera();
    camera.matrix.fromArray(JSON.parse(cameraState));
    camera.matrix.decompose(camera.position, camera.quaternion, camera.scale);
    this.viewer.applyCamera(camera);
    this.viewer.setFocalLength(29);
    // this.viewer.setFOV(47.78850646894349);
    // this.getCameraSettings();
  }

  setCraneCamera() {
    // this.viewer.setNavigationLock(false);
    this.show(this.allIds);
    this.viewer.fitToView(this.allIds, this.model);
    const cameraState = "[1,0,0,0,0,0.7071067690849304,0.7071067690849304,0,0,-0.7071067690849304,0.7071067690849304,0,5.963771820068359,-136.01742553710938,187.14556884765625,1]";
    const camera = this.viewer.getCamera();
    camera.matrix.fromArray(JSON.parse(cameraState));
    camera.matrix.decompose(camera.position, camera.quaternion, camera.scale);
    this.show(this.allIds);
    this.viewer.applyCamera(camera);
    this.viewer.setFocalLength(29);
    // this.viewer.setFOV(0);
    // this.viewer.setNavigationLock(true);
  }

  getCameraSettings() {
    let v = new THREE.Vector3(0,0,0);

    let position = this.viewer.navigation.getPosition();
    let target = this.viewer.navigation.getTarget();
    let cameraUpVector = this.viewer.navigation.getCameraUpVector();
    let navigationtool = this.viewer.getActiveNavigationTool();
  }


}
