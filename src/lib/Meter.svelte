<div class="deadline-gauge">
    <input type="range" name="" id="" disabled />
</div>

<style>
    :root {
        --meter-height: 50%;
        --meter-tick-y-offset: 7px;
        --meter-indicator-height: 100%;
    }

    .deadline-gauge {
        background:
            repeating-linear-gradient(
                90deg,
                transparent 0 9px,
                rgba(0, 0, 0, 0.4) 9px 10px
            ),
            linear-gradient(90deg, var(--aqua) 0% 40%, var(--red) 60% 100%);
        background-size:
            auto var(--meter-tick-y-offset),
            100% 100%;
        background-repeat: repeat-x, no-repeat;
        background-position: top, 0 0;
        height: var(--meter-height);
        width: 100%;
        display: flex;
        align-items: center;
        border-radius: 0.9em;
    }

    input[type="range"] {
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        background: none;
    }

    input[type="range"]::-webkit-slider-thumb,
    input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: var(--meter-indicator-height);
        width: 5px;
        padding: 0;
        margin: 0;
        background: #000;
        cursor: pointer;
    }
</style>