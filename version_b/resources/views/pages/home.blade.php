@extends('layouts.app')

@section('title', 'Home')

@section('content')

@php
$courses = [
    [
        'title' => 'Curso 1',
        'type' => 'free'
    ],
    [
        'title' => 'Curso 2',
        'type' => 'paid'
    ]
];
@endphp

@include('components.course-list', ['courses' => $courses])

@endsection