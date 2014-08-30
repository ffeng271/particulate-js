var Vec3 = lib.Vec3 = {};

Vec3.create = function () {
  return new Float32Array(3);
};

Vec3.set = function (b0, i, x, y, z) {
  var ix = i * 3, iy = ix + 1, iz = ix + 2;

  if (y == null) {
    z = x[2];
    y = x[1];
    x = x[0];
  }

  b0[ix] = x;
  b0[iy] = y;
  b0[iz] = z;
};

Vec3.get = function (b0, i, out) {
  var ix = i * 3, iy = ix + 1, iz = ix + 2;

  out[0] = b0[ix];
  out[1] = b0[iy];
  out[2] = b0[iz];

  return out;
};

Vec3.lengthSq = function (b0, ai) {
  var aix = ai * 3, aiy = aix + 1, aiz = aix + 2;
  var x = b0[aix];
  var y = b0[aiy];
  var z = b0[aiz];

  return x * x + y * y + z * z;
};

Vec3.length = function (b0, ai) {
  var aix = ai * 3, aiy = aix + 1, aiz = aix + 2;
  var x = b0[aix];
  var y = b0[aiy];
  var z = b0[aiz];

  return Math.sqrt(x * x + y * y + z * z);
};

Vec3.distanceSq = function (b0, ai, bi) {
  var aix = ai * 3, aiy = aix + 1, aiz = aix + 2;
  var bix = bi * 3, biy = bix + 1, biz = bix + 2;

  var dx = b0[aix] - b0[bix];
  var dy = b0[aiy] - b0[biy];
  var dz = b0[aiz] - b0[biz];

  return dx * dx + dy * dy + dz * dz;
};

Vec3.distance = function (b0, ai, bi) {
  var aix = ai * 3, aiy = aix + 1, aiz = aix + 2;
  var bix = bi * 3, biy = bix + 1, biz = bix + 2;

  var dx = b0[aix] - b0[bix];
  var dy = b0[aiy] - b0[biy];
  var dz = b0[aiz] - b0[biz];

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

Vec3.angle = function (b0, ai, bi, ci) {
  var aix = ai * 3, aiy = aix + 1, aiz = aix + 2;
  var bix = bi * 3, biy = bix + 1, biz = bix + 2;
  var cix = ci * 3, ciy = cix + 1, ciz = cix + 2;

  var baLen = 1 / Vec3.distance(b0, bi, ai);
  var bcLen = 1 / Vec3.distance(b0, bi, ci);

  var baX = (b0[aix] - b0[bix]) * baLen;
  var baY = (b0[aiy] - b0[biy]) * baLen;
  var baZ = (b0[aiz] - b0[biz]) * baLen;

  var bcX = (b0[cix] - b0[bix]) * bcLen;
  var bcY = (b0[ciy] - b0[biy]) * bcLen;
  var bcZ = (b0[ciz] - b0[biz]) * bcLen;

  var dot = baX * bcX + baY * bcY + baZ * bcZ;

  return Math.acos(dot);
};