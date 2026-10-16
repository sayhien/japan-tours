import json, sys
from shapely.geometry import shape, Polygon, MultiPolygon, box
src, out = sys.argv[1], sys.argv[2]
d = json.load(open(src))
NAMES = {25:'Shiga',26:'Kyoto',27:'Osaka',28:'Hyogo',29:'Nara',30:'Wakayama',31:'Tottori',32:'Shimane',33:'Okayama',34:'Hiroshima',35:'Yamaguchi',36:'Tokushima',37:'Kagawa',38:'Ehime',39:'Kochi',40:'Fukuoka',41:'Saga',42:'Nagasaki',43:'Kumamoto',44:'Oita',45:'Miyazaki',46:'Kagoshima',24:'Mie'}
clip = box(129.45, 30.95, 136.2, 36.05)
res = []
for f in d['features']:
    i = f['properties']['id']
    if i not in NAMES: continue
    g = shape(f['geometry']).buffer(0).intersection(clip)
    if g.is_empty: continue
    tol, minA = 0.0045, 0.0018
    polys = [g] if isinstance(g, Polygon) else [p for p in getattr(g,'geoms',[]) if isinstance(p, Polygon)]
    rings = []
    for p in polys:
        if p.area < minA: continue
        if i == 42 and p.centroid.y > 34.2: continue
        s = p.simplify(tol, preserve_topology=True)
        if s.is_empty or s.area < minA*0.5: continue
        for q in (list(s.geoms) if isinstance(s, MultiPolygon) else [s]):
            ext = [[round(y,4), round(x,4)] for x,y in q.exterior.coords[:-1]]
            holes = [[[round(y,4), round(x,4)] for x,y in h.coords[:-1]] for h in q.interiors if Polygon(h).area > minA]
            rings.append([ext] + holes)
    if rings: res.append({'id':i,'name':NAMES[i],'p':rings})
pts = sum(len(r) for f in res for poly in f['p'] for r in poly)
json.dump(res, open(out,'w'), separators=(',',':'))
print(len(res), 'prefectures', pts, 'points', len(json.dumps(res,separators=(',',':'))), 'bytes')
