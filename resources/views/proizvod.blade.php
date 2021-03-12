<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('./css/app.css') }}">

</head>

<body style="background-color:#D58936">
    <div id="navbar"></div>
    <div class="container d-flex justify-items-center">
        <div class="row">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src={{ asset('./css/img/' . $proizvod->kategorija . '.jpg') }} class="card-img-top"
                        alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $proizvod->naziv }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ $proizvod->kategorija }}</h6>


                    </div>

                </div>

            </div>
            <div class="col">
                <h3><b>Naziv:</b> {{ $proizvod->naziv }}</h3>
                <h3> <b> Opis:</b> Ovo <br> je <br> opis  <br> proizvoda</h3>
                <h3><b> Kategorija:</b> {{ $proizvod->kategorija }}</h3>
            </div>
        </div>
    </div>

    <script src="../js/app.js"></script>
</body>

</html>
