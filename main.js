const ColorChanger = () => {
    const BackgroungColors = ['red','green','blue','yellow','orange','purple','pink'];
    const Colors = BackgroungColors[(Math.random() * BackgroungColors.length) | 0];
    document.body.style.backgroundColor = Colors;
};