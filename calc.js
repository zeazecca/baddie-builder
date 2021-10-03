"use strict"

let data = {
    "hit_incr": 0.05,
    "player_hit": 0.6,
    "creature_hit": 0.6,
    "stat_focus": { "focus_def": 1.25, "focus_mid": 1.0, "focus_off": 0.8 },
    "def_focus": { "focus_hp": -0.15, "focus_mid": 0, "focus_ac": 0.15 },
    "off_focus": { "focus_dmg": -0.1, "focus_mid": 0, "focus_hit": 0.1 },
    "sys_lomag": [
        { "level": -3, "hp": 14.81336806, "ac": 14.0, "dmg": 1.807830801, "hit": 5.0 },
        { "level": -2, "hp": 16.22723167, "ac": 14.0, "dmg": 1.98037942, "hit": 5.0 },
        { "level": -1, "hp": 17.77604167, "ac": 14.0, "dmg": 2.169396961, "hit": 5.0 },
        { "level": 0, "hp": 19.47267801, "ac": 14.0, "dmg": 2.376455304, "hit": 5.0 },
        { "level": 1, "hp": 21.33125, "ac": 14.0, "dmg": 2.603276353, "hit": 5.0 },
        { "level": 2, "hp": 22.53402778, "ac": 14.0, "dmg": 4.515669516, "hit": 5.0 },
        { "level": 3, "hp": 30.04097222, "ac": 14.0, "dmg": 6.428062678, "hit": 5.0 },
        { "level": 4, "hp": 32.39097222, "ac": 15.0, "dmg": 8.34045584, "hit": 6.0 },
        { "level": 5, "hp": 53.70069444, "ac": 16.0, "dmg": 10.252849, "hit": 7.0 },
        { "level": 6, "hp": 54.80069444, "ac": 16.0, "dmg": 12.16524217, "hit": 7.0 },
        { "level": 7, "hp": 56.50694444, "ac": 16.0, "dmg": 14.07763533, "hit": 7.0 },
        { "level": 8, "hp": 59.20694444, "ac": 17.0, "dmg": 16.16096866, "hit": 8.0 },
        { "level": 9, "hp": 62.99444444, "ac": 18.0, "dmg": 18.09472934, "hit": 9.0 },
        { "level": 10, "hp": 62.99444444, "ac": 18.0, "dmg": 20.24216524, "hit": 9.0 },
        { "level": 11, "hp": 79.43541667, "ac": 18.0, "dmg": 22.19729345, "hit": 9.0 },
        { "level": 12, "hp": 79.43541667, "ac": 18.0, "dmg": 27.48575499, "hit": 9.0 },
        { "level": 13, "hp": 81.87291667, "ac": 19.0, "dmg": 29.71866097, "hit": 10.0 },
        { "level": 14, "hp": 89.12916667, "ac": 19.0, "dmg": 31.95156695, "hit": 10.0 },
        { "level": 15, "hp": 91.98125, "ac": 19.0, "dmg": 34.18447293, "hit": 10.0 },
        { "level": 16, "hp": 93.78125, "ac": 19.0, "dmg": 40.51994302, "hit": 10.0 },
        { "level": 17, "hp": 127.835, "ac": 20.0, "dmg": 43.00925926, "hit": 11.0 },
        { "level": 18, "hp": 127.835, "ac": 20.0, "dmg": 45.4985755, "hit": 11.0 },
        { "level": 19, "hp": 130.11, "ac": 20.0, "dmg": 52.0477208, "hit": 11.0 },
        { "level": 20, "hp": 150.9808333, "ac": 20.0, "dmg": 55.60541311, "hit": 11.0 },
        { "level": 21, "hp": 168.8017033, "ac": 20.0, "dmg": 62.16874181, "hit": 11.0 },
        { "level": 22, "hp": 188.7260417, "ac": 20.0, "dmg": 69.50676638, "hit": 11.0 },
        { "level": 23, "hp": 211.0021291, "ac": 20.0, "dmg": 77.71092726, "hit": 11.0 },
        { "level": 24, "hp": 235.9075521, "ac": 20.0, "dmg": 86.88345798, "hit": 11.0 },
        { "level": 25, "hp": 263.7526614, "ac": 20.0, "dmg": 97.13865908, "hit": 11.0 },
        { "level": 26, "hp": 294.8844401, "ac": 20.0, "dmg": 108.6043225, "hit": 11.0 },
        { "level": 27, "hp": 329.6908268, "ac": 20.0, "dmg": 121.4233238, "hit": 11.0 },
        { "level": 28, "hp": 368.6055501, "ac": 20.0, "dmg": 135.7554031, "hit": 11.0 },
        { "level": 29, "hp": 412.1135335, "ac": 20.0, "dmg": 151.7791548, "hit": 11.0 },
        { "level": 30, "hp": 460.7569377, "ac": 20.0, "dmg": 169.6942539, "hit": 11.0 }
    ],
    "sys_himag": [
        { "level": -3, "hp": 14.81336806, "ac": 14, "dmg": 1.807830801, "hit": 5 },
        { "level": -2, "hp": 16.22723167, "ac": 14, "dmg": 1.98037942, "hit": 5 },
        { "level": -1, "hp": 17.77604167, "ac": 14, "dmg": 2.169396961, "hit": 5 },
        { "level": 0, "hp": 19.47267801, "ac": 14, "dmg": 2.376455304, "hit": 5 },
        { "level": 1, "hp": 21.33125, "ac": 14, "dmg": 2.603276353, "hit": 5 },
        { "level": 2, "hp": 22.53402778, "ac": 14, "dmg": 4.515669516, "hit": 5 },
        { "level": 3, "hp": 32.39097222, "ac": 15, "dmg": 6.428062678, "hit": 6 },
        { "level": 4, "hp": 34.74097222, "ac": 16, "dmg": 8.34045584, "hit": 7 },
        { "level": 5, "hp": 57.50069444, "ac": 17, "dmg": 10.252849, "hit": 8 },
        { "level": 6, "hp": 58.60069444, "ac": 17, "dmg": 12.16524217, "hit": 8 },
        { "level": 7, "hp": 60.30694444, "ac": 17, "dmg": 14.07763533, "hit": 8 },
        { "level": 8, "hp": 63.00694444, "ac": 18, "dmg": 16.16096866, "hit": 9 },
        { "level": 9, "hp": 70.59444444, "ac": 20, "dmg": 18.09472934, "hit": 11 },
        { "level": 10, "hp": 70.59444444, "ac": 20, "dmg": 20.24216524, "hit": 11 },
        { "level": 11, "hp": 89.03541667, "ac": 20, "dmg": 22.19729345, "hit": 11 },
        { "level": 12, "hp": 89.03541667, "ac": 20, "dmg": 27.48575499, "hit": 11 },
        { "level": 13, "hp": 91.47291667, "ac": 21, "dmg": 29.71866097, "hit": 12 },
        { "level": 14, "hp": 99.62916667, "ac": 21, "dmg": 31.95156695, "hit": 12 },
        { "level": 15, "hp": 107.73125, "ac": 22, "dmg": 34.18447293, "hit": 13 },
        { "level": 16, "hp": 109.53125, "ac": 22, "dmg": 40.51994302, "hit": 13 },
        { "level": 17, "hp": 148.94, "ac": 23, "dmg": 43.00925926, "hit": 14 },
        { "level": 18, "hp": 148.94, "ac": 23, "dmg": 45.4985755, "hit": 14 },
        { "level": 19, "hp": 151.215, "ac": 23, "dmg": 52.0477208, "hit": 14 },
        { "level": 20, "hp": 174.5358333, "ac": 23, "dmg": 55.60541311, "hit": 14 },
        { "level": 21, "hp": 195.1369939, "ac": 23, "dmg": 62.16874181, "hit": 14 },
        { "level": 22, "hp": 218.1697917, "ac": 23, "dmg": 69.50676638, "hit": 14 },
        { "level": 23, "hp": 243.9212424, "ac": 23, "dmg": 77.71092726, "hit": 14 },
        { "level": 24, "hp": 272.7122396, "ac": 23, "dmg": 86.88345798, "hit": 14 },
        { "level": 25, "hp": 304.901553, "ac": 23, "dmg": 97.13865908, "hit": 14 },
        { "level": 26, "hp": 340.8902995, "ac": 23, "dmg": 108.6043225, "hit": 14 },
        { "level": 27, "hp": 381.1269413, "ac": 23, "dmg": 121.4233238, "hit": 14 },
        { "level": 28, "hp": 426.1128743, "ac": 23, "dmg": 135.7554031, "hit": 14 },
        { "level": 29, "hp": 476.4086766, "ac": 23, "dmg": 151.7791548, "hit": 14 },
        { "level": 30, "hp": 532.6410929, "ac": 23, "dmg": 169.6942539, "hit": 14 }
    ],
    // XP for party levels: [PL+6, PL-6]
    "xp_lomag": [360, 300, 240, 160, 120, 100, 80, 60, 50, 40, 30, 25, 20],
    "xp_himag": [500, 350, 250, 200, 160, 120, 80, 60, 50, 40, 30, 25, 20]
}

function update() {
    const level = document.getElementById("level_input").value
    const sys = data[document.querySelector("input[name='sys_switch']:checked").id]
    const end_mod = data.stat_focus[document.querySelector("input[name='stat_focus']:checked").id]
    const ac_mod = data.def_focus[document.querySelector("input[name='def_focus']:checked").id]
    const hit_mod = data.off_focus[document.querySelector("input[name='off_focus']:checked").id]
    const { hp, ac, dmg, hit } = scores(sys, level, end_mod, ac_mod, hit_mod)

    document.getElementById("hp_disp").innerText = hp.toFixed(1)
    document.getElementById("ac_disp").innerText = ac.toFixed(1)
    document.getElementById("dmg_disp").innerText = dmg.toFixed(1)
    document.getElementById("hit_disp").innerText = hit.toFixed(1)
}

function scores(entries, level, end_mod, ac_mod, hit_mod) {
    const entry = entries.reduce((prev, cur) => {
        if (Math.abs(prev.level - level) <= Math.abs(cur.level - level)) return prev
        else return cur
    })

    const endurance = entry.hp / data.player_hit * end_mod
    const phit = data.player_hit - ac_mod
    const hp = endurance * phit
    const ac = entry.ac + (ac_mod / data.hit_incr)

    const ferocity = entry.dmg * data.creature_hit * (1.0 / end_mod)
    const chit = data.creature_hit + hit_mod
    const dmg = ferocity / chit
    const hit = entry.hit + (hit_mod / data.hit_incr)

    return { hp, ac, dmg, hit }
}
