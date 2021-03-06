export let poses : {[key:string]:{[key:string]:number}}= {
    default_pose: {
    hrx: 0, hry: 0, bx: 0, by: 0,

        eby: 0, ebx: 0, e0y: 1, e1y: 1,
        ex: 0, ey: 0, ez: 1,

        ny: 0,

        mx: 0, my: 0,
        mly: 0, mlz: 0, mty: 0, mtz: 0, mcx: 0,
        teeth: 0,

        rhx: 0, rhy: 0, rhz: 0, rh: 0,
        rbx: 0, rby: 1, rbz: 0, rb: 1,
        rax: 0, ray: 0, raz: 0, ra: 0,
        rpx: 0, rpy: 0, rpz: 0,
        rrz: 0, rrx: -90, rry: 0,

        ri0: 0, ri1: 0, ri2: 0, ris: 0,
        rm0: 0, rm1: 0, rm2: 0, rms: 0,
        rr0: 0, rr1: 0, rr2: 0, rrs: 0,
        rp0: 0, rp1: 0, rp2: 0, rps: 0,
        rt0x: 0, rt0y: 0, rt1x: 0, rt1y: 0, rt2x: 0,

        lhx: 0, lhy: 0, lhz: 0, lh: 0,
        lbx: 0, lby: 1, lbz: 0, lb: 1,
        lax: 0, lay: 0, laz: 0, la: 0,
        lpx: 0, lpy: 0, lpz: 0,
        lrz: 0, lrx: -90, lry: 0,

        li0: 0, li1: 0, li2: 0, lis: 0,
        lm0: 0, lm1: 0, lm2: 0, lms: 0,
        lr0: 0, lr1: 0, lr2: 0, lrs: 0,
        lp0: 0, lp1: 0, lp2: 0, lps: 0,
        lt0x: 0, lt0y: 0, lt1x: 0, lt1y: 0, lt2x: 0


    },
    forward: {
        rby: 0,
        rbz: 1,
        rrz: -90,
        rrx: 90,
        lby: 0,
        lbz: 1,
        lrz: -90,
        lrx: 90,
        e0y: 1,
        e1y: 1,
        ez: 1
    },
    out: {
        rby: -1,
        rbx: 1,
        rrz: -35,
        rrx: 90,
        lby: -1,
        lbx: 1,
        lrz: -35,
        lrx: 90,
        by: -.75,
        bx: -.75
    },
    down: {
        rby: 0,
        rbx: .5,
        rbz: 1,
        rrz: -80,
        rrx: -15,
        lby: 0,
        lbx: .5,
        lbz: 1,
        lrz: -80,
        lrx: -15,
        by: .5
    },
    in_pose: {
        rby: -.75,
        rbx: -.65,
        rbz: -1,
        rrz: 80,
        rrx: 90,
        lby: -.75,
        lbx: -.65,
        lbz: -1,
        lrz: 80,
        lrx: 90,
        bx: .75
    },
    s: {
        ri0: 1, ri1: .9, ri2: .75, ris: -.1,
        rm0: 1, rm1: .9, rm2: .75, rms: -.1,
        rr0: 1, rr1: .9, rr2: .75, rrs: -.1,
        rp0: 1, rp1: .9, rp2: .75, rps: -.1,
        rt0x: -.75, rt0y: .5, rt1x: .5, rt1y: .5, rt2x: .25
    },
    5: {
        ri0: 0, ri1: 0, ri2: 0, ris: 1,
        rm0: 0, rm1: 0, rm2: 0, rms: 1,
        rr0: 0, rr1: 0, rr2: 0, rrs: 1,
        rp0: 0, rp1: 0, rp2: 0, rps: 1,
        rt0x: -1, rt0y: 0, rt1x: -1, rt1y: 0, rt2x: 0
    },
    A: {
        ri0: 1, ri1: 1, ri2: 0, ris: 0,
        rm0: 1, rm1: 1, rm2: 0, rms: 0,
        rr0: 1, rr1: 1, rr2: 0, rrs: 0,
        rp0: 1, rp1: 1, rp2: 0, rps: 0,
        rt0x: -1, rt0y: 0, rt1x: -1, rt1y: 0, rt2x: 0
    },
    1: {
        ri0: 0, ri1: 0, ri2: 0, ris: 0,
        rm0: 1, rm1: 1, rm2: 0.5, rms: 0,
        rr0: 1, rr1: 1, rr2: 0.5, rrs: 0,
        rp0: 1, rp1: 1, rp2: 0.5, rps: 0,
        rt0x: -.75, rt0y: .5, rt1x: .75, rt1y: .5, rt2x: .25
    },
    B: {
        ri0: 0, ri1: 0, ri2: 0, ris: 0,
        rm0: 0, rm1: 0, rm2: 0, rms: 0,
        rr0: 0, rr1: 0, rr2: 0, rrs: 0,
        rp0: 0, rp1: 0, rp2: 0, rps: 0,
        rt0x: -1, rt0y: 0, rt1x: -1, rt1y: 0, rt2x: 0
    },
    default_face: {
        hrx: 0, hry: 0,
        eby: 0, ebx: 0, e0y: 1, e1y: 1,
        ey: 0, ex: 0,
        ny: 0,
        mx: 0, my: 0, mly: 0, mcx: 0,
        mtz: 0,
        teeth: 0
    },
    wide: {
        hrx: .2, hry: -.2,
        eby: 1, ebx: .5, e0y: 1.5, e1y: 1,
        ey: 1, ex: 1,
        ny: 0,
        mx: 0, my: 1, mly: .5, mcx: 0,
        mtz: 0,
        teeth: 0
    },
    narrow: {
        hrx: -.2, hry: .2,
        eby: -.5, ebx: 1, e0y: .85, e1y: .75,
        ey: 0, ex: -1,
        ny: -1,
        mx: -.5, my: 0, mly: -.5, mcx: .5,
        mtz: 0,
        teeth: 0
    },
    teeth: {
        hrx: 0, hry: 0,
        eby: 1, ebx: 1, e0y: 1, e1y: .5,
        ey: 0, ex: 0,
        ny: 0,
        mx: 0, my: 1, mly: -.5, mcx: 0,
        mtz: 0,
        teeth: 1
    },
    tongue: {
        hrx: 0, hry: 0,
        eby: .5, ebx: 0, e0y: .65, e1y: 1,
        ey: 0, ex: 0,
        ny: 0,
        mx: -.25, my: .75, mly: 0, mcx: 0,
        mtz: 1, mty: .25,
        teeth: 0
    },
};

