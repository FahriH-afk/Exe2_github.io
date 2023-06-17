function KirimData() {
    var name = document.getElementById("nama").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var alamat = document.getElementById("alamat").value
    var tanggal = document.getElementById("tanggal").value

    alert(
        "nama : " + name +
        "\npeminatan : " + peminatan +
        "\nalamat : " + alamat +
        "\ntanggal : " + tanggal
    )
}