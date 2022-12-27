<?php

namespace App\Controller;

use App\Repository\PoetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PoetsController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(PoetRepository $poetRepository): Response
    {
        $poets = $poetRepository->findAll();
        // dump($poets);
        return $this->render('poets/index.html.twig', compact('poets'));
    }
}
